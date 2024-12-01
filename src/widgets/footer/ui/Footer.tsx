import React from "react";
import { Logo } from "Shared/index";
import { VkIcon } from "Shared/index";
import { TelegramIcon } from "Shared/index";
import { YoutubeIcon } from "Shared/index";
import { DiscordIcon } from "Shared/index";
const styles = require("./Footer.module.scss");
import lineSrc from "AssetsIcons/footer/line.svg";
import ellipseSrc from "AssetsIcons/footer/ellipse.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__community}>
        <Logo />
        <div className={styles.footer__community_socnetwork}>
          <div className={styles.footer__community_socnetwork_title}>
            Сообщество -
          </div>
          <div className={styles.footer__community_socnetwork_icons}>
            <VkIcon className={styles.footer__community_socnetwork_icons_vk} />
            <TelegramIcon
              className={styles.footer__community_socnetwork_icons_telegram}
            />
            <YoutubeIcon
              className={styles.footer__community_socnetwork_icons_youtube}
            />
            <DiscordIcon
              className={styles.footer__community_socnetwork_icons_discord}
            />
          </div>
        </div>
      </div>

      <img src={lineSrc} className={styles.footer__firstLine} alt="" />

      <div className={styles.footer__info}>
        <div className={styles.footer__info_knowledge}>
          <div className={styles.footer__info_knowledge_title}>Knowledge</div>
          <div className={styles.footer__info_knowledge_text}>F.A.Q.</div>
          <div className={styles.footer__info_knowledge_text}>Articals</div>
          <div className={styles.footer__info_knowledge_text}>
            Video Tutorial
          </div>
          <div className={styles.footer__info_knowledge_text}>
            Beginner’s Guide
          </div>
        </div>
        <div className={styles.footer__info_services}>
          <div className={styles.footer__info_services_title}>Services</div>
          <div className={styles.footer__info_services_text}>API Service</div>
          <div className={styles.footer__info_services_text}>Token Listing</div>
          <div className={styles.footer__info_services_text}>API Document</div>
          <div className={styles.footer__info_services_text}>
            Ticket Services
          </div>
        </div>
        <div className={styles.footer__info_support}>
          <div className={styles.footer__info_support_title}>
            Support Sevice
          </div>
          <div className={styles.footer__info_support_text}>Career</div>
          <div className={styles.footer__info_support_text}>Comunity</div>
          <div className={styles.footer__info_support_text}>Customer Chat</div>
          <div className={styles.footer__info_support_text}>
            Technical Support
          </div>
        </div>
      </div>

      <img src={lineSrc} className={styles.footer__secondLine} alt="" />

      <div className={styles.footer__copyright}>
        <div className={styles.footer__copyright_date}>
          ©Copyright 2024 All Rights Are Reserved.
        </div>

        <img
          src={ellipseSrc}
          className={styles.footer__copyright_ellipse}
          alt=""
        />

        <div className={styles.footer__copyright_privacypolicy}>
          Privacy Policy
        </div>

        <img
          src={ellipseSrc}
          className={styles.footer__copyright_ellipse}
          alt=""
        />

        <div className={styles.footer__copyright_terms}>Terms of Use</div>
      </div>
    </div>
  );
};
