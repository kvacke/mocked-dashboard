export type Activity = {
  id: string;
  name: string;
  department?: string;
  superType?: Activity;
  subType?: Activity;
  footprint?: number;
  children?: Activity[];
  createdAt: string;
  description?: string;
};
