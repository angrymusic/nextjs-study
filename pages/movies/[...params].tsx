import { Router, useRouter } from "next/router";
import SEO from "../../components/Seo";
export default function Detail({ params }) {
    const router = useRouter();
    console.log(router);
    // const [title, id] = router.query.params || [];
    const [title, id] = params || [];
    return (
        <>
            <SEO title={title}></SEO>
            {<h4>{title}</h4> || "Loading..."}
        </>
    );
}
export function getServerSideProps({ params: { params } }) {
    return { props: { params } };
}
