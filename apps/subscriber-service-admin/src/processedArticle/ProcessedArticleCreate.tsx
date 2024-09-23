import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedArticleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ArticleID" source="articleId" />
        <DateTimeInput label="ProcessedAt" source="processedAt" />
      </SimpleForm>
    </Create>
  );
};
