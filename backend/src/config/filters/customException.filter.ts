import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  private logger = new Logger('error-logger');

  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response: Response = context.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
        status = exception.getStatus();
        const errorResponse = exception.getResponse();
        message =
          typeof errorResponse === 'string'
            ? errorResponse
            : errorResponse['message'] ?? message;
            this.logger.error(`Error: ${message}`, exception);
      } else if (exception instanceof Error) {
        message = exception.message;
        this.logger.error(`Error: ${message}`, exception.stack);
      }
  
    
    return response.status(status).json({
      status,
      message
    });
  }
}
