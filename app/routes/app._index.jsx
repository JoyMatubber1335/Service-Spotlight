import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
  Icon,
} from "@shopify/polaris";
import { MenuIcon } from "@shopify/polaris-icons";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  return null;
};

export default function Index() {


  return (
    <Page>
      <ui-title-bar title="Remix app template"></ui-title-bar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section variant="oneThird">
            <Card>
              <Icon source={MenuIcon} tone="base" />
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card></Card>
          </Layout.Section>
          {/* <Layout.Section variant="oneThird">
            <BlockStack gap="500">
              <Card></Card>
              <Card>
                <BlockStack gap="200">
                  
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section> */}
        </Layout>
      </BlockStack>
    </Page>
  );
}
