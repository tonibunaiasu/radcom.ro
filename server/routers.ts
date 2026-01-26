import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // CMS Content Routers
  services: router({
    getAll: publicProcedure.query(async () => {
      const { getAllServices } = await import("./db");
      return getAllServices();
    }),
    getByCategory: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string" && ["dezvoltare", "infrastructura", "programe_europene"].includes(val)) {
          return val as "dezvoltare" | "infrastructura" | "programe_europene";
        }
        throw new Error("Invalid category");
      })
      .query(async ({ input }) => {
        const { getServicesByCategory } = await import("./db");
        return getServicesByCategory(input);
      }),
    getBySlug: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string") return val;
        throw new Error("Slug must be a string");
      })
      .query(async ({ input }) => {
        const { getServiceBySlug } = await import("./db");
        return getServiceBySlug(input);
      }),
  }),

  solutions: router({
    getAll: publicProcedure.query(async () => {
      const { getAllSolutions } = await import("./db");
      return getAllSolutions();
    }),
    getBySlug: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string") return val;
        throw new Error("Slug must be a string");
      })
      .query(async ({ input }) => {
        const { getSolutionBySlug } = await import("./db");
        return getSolutionBySlug(input);
      }),
  }),

  team: router({
    getAll: publicProcedure.query(async () => {
      const { getAllTeamMembers } = await import("./db");
      return getAllTeamMembers();
    }),
  }),

  blog: router({
    getPublished: publicProcedure.query(async () => {
      const { getPublishedBlogPosts } = await import("./db");
      return getPublishedBlogPosts();
    }),
    getBySlug: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string") return val;
        throw new Error("Slug must be a string");
      })
      .query(async ({ input }) => {
        const { getBlogPostBySlug } = await import("./db");
        return getBlogPostBySlug(input);
      }),
  }),

  caseStudies: router({
    getAll: publicProcedure.query(async () => {
      const { getAllCaseStudies } = await import("./db");
      return getAllCaseStudies();
    }),
  }),

  partners: router({
    getAll: publicProcedure.query(async () => {
      const { getAllPartners } = await import("./db");
      return getAllPartners();
    }),
  }),

  pages: router({
    getPublished: publicProcedure.query(async () => {
      const { getPublishedPages } = await import("./db");
      return getPublishedPages();
    }),
    getBySlug: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string") return val;
        throw new Error("Slug must be a string");
      })
      .query(async ({ input }) => {
        const { getPageBySlug } = await import("./db");
        return getPageBySlug(input);
      }),
  }),

  settings: router({
    getAll: publicProcedure.query(async () => {
      const { getAllSettings } = await import("./db");
      return getAllSettings();
    }),
    getByKey: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string") return val;
        throw new Error("Key must be a string");
      })
      .query(async ({ input }) => {
        const { getSettingByKey } = await import("./db");
        return getSettingByKey(input);
      }),
  }),

  jobs: router({
    getActive: publicProcedure.query(async () => {
      const { getActiveJobListings } = await import("./db");
      return getActiveJobListings();
    }),
    getBySlug: publicProcedure
      .input((val: unknown) => {
        if (typeof val === "string") return val;
        throw new Error("Slug must be a string");
      })
      .query(async ({ input }) => {
        const { getJobListingBySlug } = await import("./db");
        return getJobListingBySlug(input);
      }),
  }),
});

export type AppRouter = typeof appRouter;
