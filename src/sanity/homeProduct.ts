import { Rule } from '@sanity/types';
import { defineType } from 'sanity';

export default defineType({
  name: 'homeProduct', // Unique identifier for the schema
  type: 'document', // Document type
  title: 'Home Product', // Name displayed in the Studio
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .error('Product name must be between 2 and 50 characters.'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Product Description',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(10)
          .max(500)
          .error('Description must be between 10 and 500 characters.'),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(0)
          .error('Price must be a positive number.'),
    },
    // {
    //   name: 'category',
    //   type: 'string',
    //   title: 'Category',
    //   options: {
    //     list: [
    //       { title: 'Furniture', value: 'furniture' },
    //       { title: 'Decor', value: 'decor' },
    //       { title: 'Appliances', value: 'appliances' },
    //       { title: 'Lighting', value: 'lighting' },
    //     ],
    //     layout: 'dropdown',
    //   },
    //   validation: (Rule: Rule) => Rule.required(),
    // },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true, // Enable image cropping
      },
      validation: (Rule: Rule) =>
        Rule.required().error('An image is required.'),
    },
    // {
    //   name: 'stock',
    //   type: 'number',
    //   title: 'Stock Quantity',
    //   validation: (Rule: Rule) =>
    //     Rule.required()
    //       .min(0)
    //       .error('Stock must be a positive number.'),
    // },
    // {
    //   name: 'featured',
    //   type: 'boolean',
    //   title: 'Featured Product',
    // },
  ],
});
