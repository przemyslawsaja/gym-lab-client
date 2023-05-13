const GLOBAL = 'global';

function defaultErrorHandler(error: Error): void { throw error }

type ErrorHandler = typeof defaultErrorHandler;
type ErrorHandlerTarget = typeof GLOBAL | object;

class UseCaseErrorHandler {
  private errorHandler = new Map<ErrorHandlerTarget, ErrorHandler>();

  public registerErrorHandler(target: ErrorHandlerTarget, errorHandler: ErrorHandler): void {
    this.errorHandler.set(target, errorHandler);
  }

  public getErrorHandler(target: ErrorHandlerTarget): ErrorHandler {
    if (this.errorHandler.has(target)) {
      return <(error: Error) => void>this.errorHandler.get(target);
    }

    if (this.errorHandler.has(GLOBAL)) {
      return <(error: Error) => void>this.errorHandler.get(GLOBAL);
    }

    return defaultErrorHandler;
  }

  public disableGlobalErrorHandler(target: ErrorHandlerTarget): void {
    if (!this.errorHandler.has(target)) {
      this.errorHandler.set(target, defaultErrorHandler);
    }
  }
}

const useCaseErrorHandler = new UseCaseErrorHandler();

export abstract class UseCase<Data, Result> {
  // @ts-ignore
  protected abstract async execute(data: Data): Promise<Result>;

  // @ts-ignore
  public async exec(data?: Data): Promise<Result> {
    try {
      // @ts-ignore
      return await this.execute(data);
    } catch (error) {
      useCaseErrorHandler.getErrorHandler(this)(error);
    }
  }

  public registerErrorHandler(errorHandler: ErrorHandler): void {
    useCaseErrorHandler.registerErrorHandler(this, errorHandler);
  }

  public disableGlobalErrorHandler(): void {
    useCaseErrorHandler.disableGlobalErrorHandler(this);
  }

  public static registerGlobalErrorHandler(errorHandler: ErrorHandler): void {
    useCaseErrorHandler.registerErrorHandler(GLOBAL, errorHandler);
  }
}
