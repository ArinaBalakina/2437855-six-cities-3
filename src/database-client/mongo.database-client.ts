import { inject, injectable } from 'inversify';
import { DatabaseClient } from './database-client.interface.js';
import mongoose, {Mongoose} from 'mongoose';
import { Logger } from '../logger/logger.interface.js';
import { Component } from '../types/component.enum.js';
import { setTimeout } from 'node:timers/promises';

const RETRY_COUNT = 5;
const RETRY_TIMEOUT = 1000;

@injectable()
export class MongoDatabaseClient implements DatabaseClient {
  private mongooseInstance: Mongoose | null = null;
  private isConnected: boolean;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ) {
    this.isConnected = false;
  }

  public async connect(uri: string): Promise<void> {
    if (this.isConnected) {
      throw new Error('MongoDB client already connected');
    }

    this.logger.info('Trying to connect to MongoDB…');
    let attempt = 0;
    while (attempt < RETRY_COUNT) {
      try {
        this.mongooseInstance = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        this.isConnected = true;
        this.logger.info('Database connection established.');
        return;
      } catch (error) {
        attempt++;
        this.logger.error(`Failed to connect to the database. Attempt ${attempt}`, error as Error);
        await setTimeout(RETRY_TIMEOUT);
      }
    }

    throw new Error(`Unable to establish database connection after ${RETRY_COUNT}`);
  }

  public async disconect(): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Not connected to the database');
    }

    await this.mongooseInstance?.disconnect();
    this.isConnected = false;
    this.logger.info('Database connection closed.');
  }
}