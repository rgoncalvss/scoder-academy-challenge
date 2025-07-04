import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { skinRouter } from "./skin.routes";
import { userRouter } from "./user.routes";
import { questionRouter } from "./question.routes";

export const router: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.register(skinRouter, { prefix: "/skin" });
  fastify.register(userRouter, { prefix: "/user" });
  fastify.register(questionRouter, {prefix: "/question"})
};
