export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  create_at?: Date;
};

export class Category {
  constructor(public readonly props: CategoryProperties) {}
  get name() {
    return this.props.name;
  }
  get description() {
    return this.props.description;
  }
  get is_active() {
    return this.props.is_active;
  }
  get created_at() {
    return this.props.create_at;
  }
}
const category = new Category({ name: "Movie" });
/* uuid id
string name
string description
boolean is_active
date created_at
 */
