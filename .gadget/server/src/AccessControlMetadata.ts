export type GadgetAccessControl = Record<string, RoleMetadataObject>;

export type RoleMetadataObject = {
  name: string;
  default: {
    read: boolean;
    action: boolean;
  };
  grants: Record<string, GrantMetadataObject>;
};

export type GrantMetadataObject = {
  filter?: string;
  granted: boolean;
};
