/* eslint-disable sort-imports */
/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/services.scss";

import { ArrowRight20 } from "@carbon/icons-react";

import {
  LeadSpace,
  TableOfContents,
  ContentBlockSegmented,
  ContentBlockCards,
  CardLink,
} from "@carbon/ibmdotcom-react";

import React from "react";

/**
 * DDS patters template
 *
 * @returns {*} JSX for Services template
 */
const Services = () => (
  <>
    <LeadSpace
      type="default"
      theme="g100"
      title="Leadspace title"
      copy="Use this area for a short line of copy to support the title"
      gradient={true}
      buttons={[
        {
          copy: "Lorem ipsum dolor",
          href: "https://www.ibm.com/services",
          renderIcon: ArrowRight20,
        },
      ]}
      image={{
        defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
        alt: "Image alt text",
        sources: [
          {
            src: "https://dummyimage.com/320x370/ee5396/161616",
            breakpoint: "sm",
          },
          {
            src: "https://dummyimage.com/672x400/ee5396/161616",
            breakpoint: "md",
          },
        ],
      }}
    />
    <TableOfContents theme="white" menuLabel="Jump to" stickyOffset={48}>
      <a name="content-block-segmented" data-title="Content Block Segmented" />
      <ContentBlockSegmented
        heading="Content Block Segmented Title"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."
        cta={{
          style: "card",
          type: "local",
          copy: "Services",
          cta: {
            href: "https;//www.ibm.com/services",
          },
        }}
        items={[
          {
            heading: "Lorem ipsum doller",
            copy: `
            — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. 

            — Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. 


            — Donec quis pretium odio, in dignissim sapien.`,
          },
          {
            heading: "Lorem ipsum doller",
            copy: `
            — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. 

            — Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. 

            
            — Donec quis pretium odio, in dignissim sapien.`,
          },
          {
            heading: "Lorem ipsum doller",
            copy: `
            — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. 

            — Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. 

            
            — Donec quis pretium odio, in dignissim sapien.`,
          },
        ]}
      />
      <a
        name="content-block-cards-and-card-link"
        data-title="Content Block Cards and Card Link"
      />
      <ContentBlockCards
        heading="Content Block Cards and Card Link"
        cards={[
          {
            image: {
              defaultSrc:
                "https://dummyimage.com/1056x792/ee5396/161616%26text=4:3",
              alt: "Image alt text",
            },
            eyebrow: "Lorem",
            heading: "Lorem ipsum dolor sit amet, consectetur adip possib",
            cta: {
              href: "https://www.example.com",
            },
          },
          {
            image: {
              defaultSrc:
                "https://dummyimage.com/792x1056/ee5396/161616%26text=3:4",
              alt: "Image alt text",
            },
            eyebrow: "Lorem",
            heading: "Lorem ipsum dolor sit amet, consectetur adip possib",
            cta: {
              href: "https://www.example.com",
            },
          },
          {
            image: {
              defaultSrc:
                "https://dummyimage.com/1056x1056/ee5396/161616%26text=1:1",
              alt: "Image alt text",
            },
            eyebrow: "Lorem",
            heading: "Lorem ipsum dolor sit amet, consectetur adip possib",
            cta: {
              href: "https://www.example.com",
            },
          },
        ]}
      />

      <CardLink
        card={{
          copy: "Services",
          cta: {
            type: "local",
            href: "https;//www.ibm.com/services",
            icon: {
              src: ArrowRight20,
            },
          },
        }}
      />
    </TableOfContents>
  </>
);
export default Services;