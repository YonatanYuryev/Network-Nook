import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { useTheme } from "app/providers/ThemeProvider";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const toggleLan = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className, cls[theme]])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLan}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
