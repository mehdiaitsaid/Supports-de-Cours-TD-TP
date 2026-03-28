import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const useSiteData = () => {
    const { siteConfig } = useDocusaurusContext();
    return siteConfig.customFields;
};
