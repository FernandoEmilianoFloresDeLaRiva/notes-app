export class CreateCategoryResponse {
  id: number;
  category_name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(resApi: any) {
    this.id = resApi?.id;
    this.category_name = resApi?.category_name;
  }
}
