import { apiReference } from "@scalar/hono-api-reference"

import { type AppOpenAPI } from "@/lib/types"
import env from "@/env"

import packageJSON from "../../package.json" with { type: "json" }

export default function configureOpenAPI(app: AppOpenAPI) {
  app.openAPIRegistry.registerComponent("securitySchemes", "CookieAuth", {
    type: "apiKey",
    in: "cookie",
    name: env?.AUTH_COOKIE,
    description: "Provide the authentication token for secured endpoints.",
  })

  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "@efr's Starter Kit API",
      description:
        "This is @efr's general-purpose API starter kit to help you bootstrap backend services efficiently and securely.",
      contact: {
        name: "@efr Support",
        email: "support@efr.com",
        url: "https://efr.com/support",
      },
      termsOfService: "https://efr.com/terms",
    },
  })

  app.get(
    "/reference",
    apiReference({
      theme: "deepSpace",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
      hideDarkModeToggle: false,
      darkMode: true,
      authentication: {
        preferredSecurityScheme: "CookieAuth",
        apiKey: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        },
      },
      metaData: {
        title: "@efr Starter Kit API Documentation",
        description:
          "Explore @efr's starter kit API documentation to learn how to build a fully typesafe backend with an excellent developer experience.",
        ogDescription:
          "The ultimate API starter kit by @efr. Build faster, scale easier, and enjoy better developer experience.",
        ogTitle: "@efr Starter Kit API Documentation",
        ogImage: "https://efr.com/assets/og-image.png",
        twitterCard: "summary_large_image",
        twitterSite: "@efr_dev",
      },
      servers: [
        {
          url: "http://localhost:2222",
          description: "Local development server",
        },
        {
          url: "https://example-api.efr.com",
          description: "Production server",
        },
      ],
      operationsSorter: (a, b) => {
        const methodOrder = ["GET", "POST", "PUT", "PATCH", "DELETE"]
        const methodComparison =
          methodOrder.indexOf(a.httpVerb) - methodOrder.indexOf(b.httpVerb)

        if (methodComparison !== 0) {
          return methodComparison
        }

        return a.path.localeCompare(b.path)
      },
    })
  )
}
