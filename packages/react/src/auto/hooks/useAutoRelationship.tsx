import { assert } from "@gadgetinc/api-client-core";
import React from "react";
import type { useFieldArray } from "../../useActionForm.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useFieldMetadata } from "./useFieldMetadata.js";

export interface RelationshipContextValue {
  /**
   * Path within the form state to the current relationship context.
   * Includes indexes for hasMany/hasManyThrough relationships
   */
  transformPath: (path: string) => string;
  /**
   * Path within the form metadata to the current relationship context.
   * Includes field names only and does not include indexes for hasMany/hasManyThrough relationships
   */
  transformMetadataPath: (path: string) => string;
  fieldArray?: ReturnType<typeof useFieldArray>;
}

export const RelationshipContext = React.createContext<RelationshipContextValue | undefined>(undefined);

export const useRelationshipContext = () => {
  return React.useContext(RelationshipContext);
};

export const useAutoRelationship = (props: { field: string }) => {
  const { field } = props;
  const formMetadata = useAutoFormMetadata();

  assert(formMetadata.model, "useAutoRelationship must be used within an AutoForm for a model");

  const { path, metadata } = useFieldMetadata(field);

  return {
    path,
    metadata,
  };
};
