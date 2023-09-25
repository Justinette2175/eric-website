import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHeader1 extends Schema.Component {
  collectionName: 'components_blocks_header_1s';
  info: {
    displayName: 'Header 1';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface BlocksHeader2 extends Schema.Component {
  collectionName: 'components_blocks_header_2s';
  info: {
    displayName: 'Header 2';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface BlocksHeader3 extends Schema.Component {
  collectionName: 'components_blocks_header_3s';
  info: {
    displayName: 'Header 3';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface BlocksHeader4 extends Schema.Component {
  collectionName: 'components_blocks_header_4s';
  info: {
    displayName: 'Header 4';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface BlocksImageGallery extends Schema.Component {
  collectionName: 'components_blocks_image_galleries';
  info: {
    displayName: 'Image Gallery';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface BlocksOneImage extends Schema.Component {
  collectionName: 'components_blocks_one_images';
  info: {
    displayName: 'One image';
    icon: 'chalkboard';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface BlocksParagraph extends Schema.Component {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'align-justify';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface TextPageTitle extends Schema.Component {
  collectionName: 'components_text_page_titles';
  info: {
    displayName: 'Page Title';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface TextParagraph extends Schema.Component {
  collectionName: 'components_text_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface TextSubtitle extends Schema.Component {
  collectionName: 'components_text_subtitles';
  info: {
    displayName: 'Subtitle';
    icon: 'align-left';
  };
  attributes: {
    text: Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'blocks.header-1': BlocksHeader1;
      'blocks.header-2': BlocksHeader2;
      'blocks.header-3': BlocksHeader3;
      'blocks.header-4': BlocksHeader4;
      'blocks.image-gallery': BlocksImageGallery;
      'blocks.one-image': BlocksOneImage;
      'blocks.paragraph': BlocksParagraph;
      'text.page-title': TextPageTitle;
      'text.paragraph': TextParagraph;
      'text.subtitle': TextSubtitle;
    }
  }
}
