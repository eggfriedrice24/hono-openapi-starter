// This is an example of how to configure ip-restriction middleware if needed

// import type { Context, Next } from "hono"
// import { ipRestriction } from "hono/ip-restriction"
// import { getConnInfo } from "@hono/node-server/conninfo"

// import { type AppBindings } from "@/lib/types"
// import { db } from "@/db"
// import { type IP } from "@/db/schema/ip-whitelist"

// async function fetchWhitelistedIPs(): Promise<IP[]> {
//   const ips = await db.query.ipWhitelist.findMany()

//   return ips
// }

// export async function ipRestrictionMiddleware(
//   c: Context<AppBindings, string, object>,
//   next: Next
// ) {
//   const ips = await fetchWhitelistedIPs()

//   const allowList = ips.map((ip) => ip.ipAddress)

//   const middleware = ipRestriction(
//     getConnInfo,
//     { allowList },
//     async (remote, c) => {
//       return c.text(`Access denied for IP: ${remote.addr} ${remote.type}`, 403)
//     }
//   )
//   return middleware(c, next)
// }
