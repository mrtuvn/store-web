import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layout/Common.tsx", [
        index("routes/home.tsx"),
        route("contact","routes/contact.tsx"),
    ]),

    layout("layout/auth/layout.tsx", [
        route("login", "components/auth/login.tsx"),
        route("register", "components/auth/register.tsx")
    ])

] satisfies RouteConfig;
