import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createTestContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@radcom.ro",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

describe("Services Router", () => {
  it("should fetch all services", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const services = await caller.services.getAll();
    
    expect(Array.isArray(services)).toBe(true);
    if (services.length > 0) {
      expect(services[0]).toHaveProperty("title");
      expect(services[0]).toHaveProperty("slug");
      expect(services[0]).toHaveProperty("category");
    }
  });

  it("should fetch services by category", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const services = await caller.services.getByCategory("dezvoltare");
    
    expect(Array.isArray(services)).toBe(true);
    services.forEach(service => {
      expect(service.category).toBe("dezvoltare");
    });
  });
});

describe("Solutions Router", () => {
  it("should fetch all solutions", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const solutions = await caller.solutions.getAll();
    
    expect(Array.isArray(solutions)).toBe(true);
    if (solutions.length > 0) {
      expect(solutions[0]).toHaveProperty("industry");
      expect(solutions[0]).toHaveProperty("slug");
    }
  });

  it("should fetch solution by slug", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const solution = await caller.solutions.getBySlug("transport");
    
    if (solution) {
      expect(solution.slug).toBe("transport");
      expect(solution).toHaveProperty("industry");
      expect(solution).toHaveProperty("description");
    }
  });
});

describe("Team Router", () => {
  it("should fetch all team members", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const team = await caller.team.getAll();
    
    expect(Array.isArray(team)).toBe(true);
    if (team.length > 0) {
      expect(team[0]).toHaveProperty("name");
      expect(team[0]).toHaveProperty("position");
    }
  });
});

describe("Blog Router", () => {
  it("should fetch published blog posts", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const posts = await caller.blog.getPublished();
    
    expect(Array.isArray(posts)).toBe(true);
    posts.forEach(post => {
      expect(post.status).toBe("published");
    });
  });
});

describe("Jobs Router", () => {
  it("should fetch active job listings", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const jobs = await caller.jobs.getActive();
    
    expect(Array.isArray(jobs)).toBe(true);
    jobs.forEach(job => {
      expect(job.status).toBe("active");
    });
  });
});

describe("Partners Router", () => {
  it("should fetch all partners", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const partners = await caller.partners.getAll();
    
    expect(Array.isArray(partners)).toBe(true);
    if (partners.length > 0) {
      expect(partners[0]).toHaveProperty("name");
    }
  });
});

describe("Pages Router", () => {
  it("should fetch published pages", async () => {
    const { ctx } = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const pages = await caller.pages.getPublished();
    
    expect(Array.isArray(pages)).toBe(true);
    pages.forEach(page => {
      expect(page.status).toBe("published");
    });
  });
});
