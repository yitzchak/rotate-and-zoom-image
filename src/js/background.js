'use strict';

const messageSender = new MessageSender();
const options = new Options();

const ROTATE_ANGLE = 90;
const ZOOM_AMOUNT = 25;

browser.contextMenus.create({
  title: browser.i18n.getMessage('rotateClockwise', ROTATE_ANGLE),
  contexts: ["image", "link"],
  icons: {
    16: "../img/rotate-cw.svg",
    32: "../img/rotate-cw.svg",
    48: "../img/rotate-cw.svg",
    96: "../img/rotate-cw.svg",
  },
  onclick: (info, tab) => messageSender.rotateImage(tab, ROTATE_ANGLE)
});

browser.contextMenus.create({
  title: browser.i18n.getMessage('rotateCounterclockwise', ROTATE_ANGLE),
  contexts: ["image", "link"],
  icons: {
    16: "../img/rotate-ccw.svg",
    32: "../img/rotate-ccw.svg",
    48: "../img/rotate-ccw.svg",
    96: "../img/rotate-ccw.svg",
  },
  onclick: (info, tab) => messageSender.rotateImage(tab, -ROTATE_ANGLE)
});

browser.contextMenus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["image", "link"]
});

browser.contextMenus.create({
  title: browser.i18n.getMessage("flipHorizontally"),
  contexts: ["image", "link"],
  icons: {
    16: "../img/flip-horizontal.svg",
    32: "../img/flip-horizontal.svg",
    48: "../img/flip-horizontal.svg",
    96: "../img/flip-horizontal.svg",
  },
  onclick: (info, tab) => messageSender.flipImage(tab, "horizontally")
});

browser.contextMenus.create({
  title: browser.i18n.getMessage("flipVertically"),
  contexts: ["image", "link"],
  icons: {
    16: "../img/flip-vertical.svg",
    32: "../img/flip-vertical.svg",
    48: "../img/flip-vertical.svg",
    96: "../img/flip-vertical.svg",
  },
  onclick: (info, tab) => messageSender.flipImage(tab, "vertically")
});

browser.contextMenus.create({
  id: "separator-2",
  type: "separator",
  contexts: ["image", "link"]
});

browser.contextMenus.create({
  title: browser.i18n.getMessage('zoomIn', ZOOM_AMOUNT),
  contexts: ["image", "link"],
  icons: {
    16: "../img/zoom-in.svg",
    32: "../img/zoom-in.svg",
    48: "../img/zoom-in.svg",
    96: "../img/zoom-in.svg",
  },
  onclick: (info, tab) => messageSender.zoomImage(tab, 100+ZOOM_AMOUNT)
});

browser.contextMenus.create({
  title: browser.i18n.getMessage('zoomOut', ZOOM_AMOUNT),
  contexts: ["image", "link"],
  icons: {
    16: "../img/zoom-out.svg",
    32: "../img/zoom-out.svg",
    48: "../img/zoom-out.svg",
    96: "../img/zoom-out.svg",
  },
  onclick: (info, tab) => messageSender.zoomImage(tab, 10000/(100+ZOOM_AMOUNT))
});

browser.contextMenus.create({
  id: "separator-3",
  type: "separator",
  contexts: ["image", "link"]
});

browser.contextMenus.create({
  title: browser.i18n.getMessage("resetAll"),
  contexts: ["image", "link"],
  icons: {
    16: "../img/rollback.svg",
    32: "../img/rollback.svg",
    48: "../img/rollback.svg",
    96: "../img/rollback.svg",
  },
  onclick: (info, tab) => messageSender.resetAllTransformations(tab)
});
