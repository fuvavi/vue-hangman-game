export interface IQuestion {
  correctAnswer: string[],
  suggestion: string[]
}

export interface ICategory {
  id: number;
  name: string;
  questions: IQuestion[];
}
