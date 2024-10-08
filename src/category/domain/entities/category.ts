export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category {
  constructor(public readonly props: CategoryProperties) {
    this.props.description = this.props.description ?? null;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

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
    return this.props.created_at;
  }
}
const category = new Category({ name: "Movie" });

/* uuid id
string name
string description
boolean is_active
date created_at
 */
