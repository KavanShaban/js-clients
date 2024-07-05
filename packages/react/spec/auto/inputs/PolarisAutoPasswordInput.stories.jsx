import { AppProvider, Card, Page } from "@shopify/polaris";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "../../../src/GadgetProvider.tsx";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.tsx";
import { PolarisPasswordInput } from "../../../src/auto/polaris/inputs/PolarisPasswordInput.tsx";
import { testApi as api } from "../../apis.ts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Polaris/AutoPasswordInput",
  component: (props) => (
    <PolarisAutoForm {...props}>
      <PolarisPasswordInput field="password" />
    </PolarisAutoForm>
  ),
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <AppProvider>
            <FormProvider {...useForm()}>
              <Page>
                <Card>
                  <Story />
                </Card>
              </Page>
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Create = { args: { action: api.user.signUp } };
export const Update = { args: { action: api.user.update, findBy: "1" } };
