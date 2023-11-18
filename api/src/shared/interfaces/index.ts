export interface IProvider {
  startOperations(): Promise<boolean>;
  finishOperation(): Promise<boolean>;
  cancelOperation(): Promise<boolean>;
}
