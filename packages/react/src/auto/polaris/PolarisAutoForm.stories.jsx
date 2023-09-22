import { Provider } from '../../GadgetProvider.tsx';
import { PolarisAutoForm } from './PolarisAutoForm.tsx';
import { AppProvider } from '@shopify/polaris';
import { FormProvider, useForm } from 'react-hook-form';
import { testApi as api } from '../../../spec/apis.ts';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Polaris/AutoForm',
  component: PolarisAutoForm,
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading the theme value from parameters
      return (
        <Provider api={api}>
          <AppProvider>
            <FormProvider {...useForm()}>
              <Story />
            </FormProvider>
          </AppProvider>
        </Provider>
      );
    },
  ],
  
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    action: api.widget.create
  },
};

export const Excluded = {
  args: {
    action: api.widget.create,
    exclude: ["birthday", "roles"]
  },
};

export const Included = {
  args: {
    action: api.widget.create,
    include: ["birthday", "roles"]
  },
};

