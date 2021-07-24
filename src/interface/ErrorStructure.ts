export interface ErrorStructure {
  message: string;
  field?: string;
}

export interface ErrorResponseBody {
  errors: ErrorStructure[];
}
