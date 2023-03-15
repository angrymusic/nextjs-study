import { Router, useRouter } from "next/router";
import SEO from "../../components/Seo";
export default function Detail() {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <SEO title={router.query.title as string}></SEO>
            <h4>{router.query.title}</h4>
        </>
    );
}
