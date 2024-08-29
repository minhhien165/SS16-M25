"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const handleChange = (event: any) => {
    const selectedLanguage = event.target.value;
    router.push(`/${selectedLanguage}`);
  };

  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("company")}</h2>
      <select onChange={handleChange}>
        <option value="">Select language</option>
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </>
  );
}
