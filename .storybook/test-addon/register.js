import React from 'react';
import { addons, types } from '@storybook/addons';
import { Button, Icons } from '@storybook/components';
import { useParameter } from '@storybook/api'
const ADDON_ID = 'testaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

const copyQueryParamLink = (api) => {

  const story = api.getCurrentStoryData()

  let touchedArgs = {}

  for (const arg in story.args) {
    if (story.args[arg] !== story.initialArgs[arg]) {
      touchedArgs[arg] = story.args[arg]
    }
  }

  const queryString = new URLSearchParams({ path: api.getUrlState().path, ...touchedArgs, }).toString();


  const componentUrl = new URL(window.location.host)
  componentUrl.search = queryString

  navigator.permissions.query({ name: "clipboard-write" }).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(componentUrl.href)
    }
  });
}

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: 'viewport / Copy Link',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active, key }) => (
      <Button onClick={() => copyQueryParamLink(api)}>
        <Icons icon='link' color={api.getInitialOptions().theme.barTextColor} />
      </Button>
    ),
  });
});
