import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedArticleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ArticleID" source="articleId" />
        <DateTimeInput label="ProcessedAt" source="processedAt" />
      </SimpleForm>
    </Edit>
  );
};
