import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const [
  HEADER4,
  HEADER5,
  HEADER6,
] = [
  "header-4",
  "header-5",
  "header-6",
];

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
      `.rn-editor__rem__body__text--h2:not(.document-title) { color: ${h2} !important; }`
    );
  });

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
      `.dark .rn-editor__rem__body__text--h2:not(.document-title) { color: ${h2d} !important; }`
    );
  });

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
      `.rn-editor__rem__body__text--h3:not(.document-title) { color: ${h3} !important; }`
    );
  });

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
      `.rn-editor__rem__body__text--h4:not(.document-title) { color: ${h4} !important; }`
    );
  });

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
      `.dark .rn-editor__rem__body__text--h4:not(.document-title) { color: ${h4d} !important; }`
    );
  });

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
      `.rn-editor__rem__body__text--h5:not(.document-title) { color: ${h5} !important; }`
    );
  });

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
      `.dark .rn-editor__rem__body__text--h5:not(.document-title) { color: ${h5d} !important; }`
    );
  });

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
      `.rn-editor__rem__body__text--h6:not(.document-title) { color: ${h6} !important; }`
    );
  });

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
      `.dark .rn-editor__rem__body__text--h6:not(.document-title) { color: ${h6d} !important; }`
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
