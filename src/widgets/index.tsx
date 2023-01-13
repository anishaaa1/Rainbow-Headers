import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

/**
 * Simple example snippet plugin which shows how to:
 * - Register style settings
 * - Register Custom CSS
 * - Register a command
 *
 * How to Use:
 * - Tag a Rem with ##Plugin Style, or use the /Add Plugin Style command on a Rem
 * - The Rem will be styled with the CSS defined in the plugin
 */
async function onActivate(plugin: ReactRNPlugin) {
  // Header 1 | Light Mode
  await plugin.settings.registerStringSetting({
    id: "h1",
    title: "Header 1 | Light Mode (hex)",
    description: "Provide a hex color for Header 1 in Light Mode.",
    defaultValue: "#f4acb7",
  });

  plugin.track(async (reactivePlugin) => {
    const h1 = await reactivePlugin.settings.getSetting("h1");
    await reactivePlugin.app.registerCSS(
      "h1",
      `.rn-editor__rem__body__text--h1:not(.document-title) { color: ${h1}!important; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 1 | Dark Mode
  await plugin.settings.registerStringSetting({
    id: "h1d",
    title: "Header 1 | Dark Mode (hex)",
    description: "Provide a hex color for Header 1 in Dark Mode.",
    defaultValue: "#f4acb7",
  });

  plugin.track(async (reactivePlugin) => {
    const h1d = await reactivePlugin.settings.getSetting("h1d");
    await reactivePlugin.app.registerCSS(
      "h1d",
      `.dark .rn-editor__rem__body__text--h1:not(.document-title) { color: ${h1d}!important; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 2 | Light Mode
  await plugin.settings.registerStringSetting({
    id: "h2",
    title: "Header 2 | Light Mode (hex)",
    description: "Provide a hex color for Header 2 in Light Mode.",
    defaultValue: "#BDB2FF",
  });

  plugin.track(async (reactivePlugin) => {
    const h2 = await reactivePlugin.settings.getSetting("h2");
    await reactivePlugin.app.registerCSS(
      "h2",
      `.rn-editor__rem__body__text--h2:not(.document-title) { color: ${h2}!important; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 2 | Dark Mode
  await plugin.settings.registerStringSetting({
    id: "h2d",
    title: "Header 2 | Dark Mode (hex)",
    description: "Provide a hex color for Header 2 in Dark Mode.",
    defaultValue: "#BDB2FF",
  });

  plugin.track(async (reactivePlugin) => {
    const h2d = await reactivePlugin.settings.getSetting("h2d");
    await reactivePlugin.app.registerCSS(
      "h2d",
      `.dark .rn-editor__rem__body__text--h2:not(.document-title) { color: ${h2d}!important; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 3 | Light Mode
  await plugin.settings.registerStringSetting({
    id: "h3",
    title: "Header 3 | Light Mode (hex)",
    description: "Provide a hex color for Header 3 in Light Mode.",
    defaultValue: "#83BCFF",
  });

  plugin.track(async (reactivePlugin) => {
    const h3 = await reactivePlugin.settings.getSetting("h3");
    await reactivePlugin.app.registerCSS(
      "h3",
      `.rn-editor__rem__body__text--h3:not(.document-title) { color: ${h3}!important; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 3 | Dark Mode
  await plugin.settings.registerStringSetting({
    id: "h3d",
    title: "Header 3 | Dark Mode (hex)",
    description: "Provide a hex color for Header 3 in Dark Mode.",
    defaultValue: "#83BCFF",
  });

  plugin.track(async (reactivePlugin) => {
    const h3d = await reactivePlugin.settings.getSetting("h3d");
    await reactivePlugin.app.registerCSS(
      "h3d",
      `.dark .rn-editor__rem__body__text--h3:not(.document-title) { color: ${h3d}!important; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 4 | Light Mode
  await plugin.settings.registerStringSetting({
    id: "h4",
    title: "Header 4 | Light Mode (hex)",
    description: "Provide a hex color for Header 4 in Light Mode.",
    defaultValue: "#A9DEF9",
  });

  plugin.track(async (reactivePlugin) => {
    const h4 = await reactivePlugin.settings.getSetting("h4");
    await reactivePlugin.app.registerCSS(
      "h4",
      `[data-rem-tags~="Header 4"] .rem-text { color: ${h4}; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 4 | Dark Mode
  await plugin.settings.registerStringSetting({
    id: "h4d",
    title: "Header 4 | Dark Mode (hex)",
    description: "Provide a hex color for Header 4 in Dark Mode.",
    defaultValue: "#A9DEF9",
  });

  plugin.track(async (reactivePlugin) => {
    const h4d = await reactivePlugin.settings.getSetting("h4d");
    await reactivePlugin.app.registerCSS(
      "h4d",
      `.dark [data-rem-tags~="Header 4"] .rem-text { color: ${h4d}; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 5 | Light Mode
  await plugin.settings.registerStringSetting({
    id: "h5",
    title: "Header 5 | Light Mode (hex)",
    description: "Provide a hex color for Header 5 in Light Mode.",
    defaultValue: "#B0F2B4",
  });

  plugin.track(async (reactivePlugin) => {
    const h5 = await reactivePlugin.settings.getSetting("h5");
    await reactivePlugin.app.registerCSS(
      "h5",
      `[data-rem-tags~="Header 5"] .rem-text { color: ${h5}; }`
    );
  });

  async function onActivate(plugin: ReactRNPlugin) {
  // Header 5 | Dark Mode
  await plugin.settings.registerStringSetting({
    id: "h5d",
    title: "Header 5 | Dark Mode (hex)",
    description: "Provide a hex color for Header 5 in Dark Mode.",
    defaultValue: "#B0F2B4",
  });

  plugin.track(async (reactivePlugin) => {
    const h5d = await reactivePlugin.settings.getSetting("h5d");
    await reactivePlugin.app.registerCSS(
      "h5d",
      `.dark [data-rem-tags~="Header 5"] .rem-text { color: ${h5d}; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 6 | Light Mode
  await plugin.settings.registerStringSetting({
    id: "h6",
    title: "Header 6 | Light Mode (hex)",
    description: "Provide a hex color for Header 6 in Light Mode.",
    defaultValue: "#FDE690",
  });

  plugin.track(async (reactivePlugin) => {
    const h6 = await reactivePlugin.settings.getSetting("h6");
    await reactivePlugin.app.registerCSS(
      "h6",
      `[data-rem-tags~="Header 6"] .rem-text { color: ${h6}; }`
    );
  });

async function onActivate(plugin: ReactRNPlugin) {
  // Header 6 | Dark Mode
  await plugin.settings.registerStringSetting({
    id: "h6d",
    title: "Header 6 | Dark Mode (hex)",
    description: "Provide a hex color for Header 6 in Dark Mode.",
    defaultValue: "#FDE690",
  });

  plugin.track(async (reactivePlugin) => {
    const h6d = await reactivePlugin.settings.getSetting("h6d");
    await reactivePlugin.app.registerCSS(
      "h6d",
      `.dark [data-rem-tags~="Header 6"] .rem-text { color: ${h6d}; }`
    );
  });

// Powerups
  // Header 4 Powerup
  await plugin.app.registerCommand({
    id: "header4",
    name: "Header 4",
    action: async () => {
      const focusedRem = await plugin.focus.getFocusedRem();
      if (!focusedRem) {
        return;
      }
      let tag = await plugin.rem.findByName(["Header 4"], null);
      if (!tag) {
        tag = await plugin.rem.createRem();
        if (!tag) {
          return;
        }
        await tag.setText(["Header 4"]);
      }
      await focusedRem.addTag(tag);
    },
  });
}

// Header 5 Powerup
await plugin.app.registerCommand({
  id: "header5",
  name: "Header 5",
  action: async () => {
    const focusedRem = await plugin.focus.getFocusedRem();
    if (!focusedRem) {
      return;
    }
    let tag = await plugin.rem.findByName(["Header 5"], null);
    if (!tag) {
      tag = await plugin.rem.createRem();
      if (!tag) {
        return;
      }
      await tag.setText(["Header 5"]);
    }
    await focusedRem.addTag(tag);
  },
});
}

// Header 6 Powerup
await plugin.app.registerCommand({
  id: "header6",
  name: "Header 6",
  action: async () => {
    const focusedRem = await plugin.focus.getFocusedRem();
    if (!focusedRem) {
      return;
    }
    let tag = await plugin.rem.findByName(["Header 6"], null);
    if (!tag) {
      tag = await plugin.rem.createRem();
      if (!tag) {
        return;
      }
      await tag.setText(["Header 6"]);
    }
    await focusedRem.addTag(tag);
  },
});
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
