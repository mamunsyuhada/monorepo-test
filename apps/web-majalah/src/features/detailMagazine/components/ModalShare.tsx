import { Dialog, DialogTitle, Stack } from "@mui/material";
import * as Icons from "@tabler/icons-react";
import * as React from "react";

import { IconButton } from "@/components";

interface Props {
  open: boolean;
  onClose: (value: string) => void;
  title: string;
}

export const ModalShare = React.memo(function ModalShare({
  open,
  onClose,
  title,
}: Props) {
  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };
  const handleShareX = () => {
    window.open(
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        `${title}
${window.location.href}

Baca berita terkini dengan mudah dan nyaman, download aplikasi Inilahcom di iOS dan Android
#inilahcom #inilahdotcom via @inilahdotcom`
      )}`,
      "_blank"
    );
  };

  const handleShareWhatsapp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `*${title}*
${window.location.href}

Download aplikasi Inilahcom untuk mendapatkan berita mendalam dan terpercaya khas inilah.com

iOS: https://apple.co/3LMfnYP 
Android: https://bit.ly/inilahapp`
      )}`,
      "_blank"
    );
  };

  const handleShareBrowser = React.useCallback(() => {
    window.navigator.share({ url: window.location.href });
  }, []);

  const mediaShare = [
    { icon: "IconBrandFacebook", handler: handleShareFacebook },
    { icon: "IconBrandX", handler: handleShareX },
    { icon: "IconBrandWhatsapp", handler: handleShareWhatsapp },
    { icon: "IconShare3", handler: handleShareBrowser },
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Bagikan ke</DialogTitle>
      <Stack direction="row" spacing={2} padding={2}>
        {mediaShare.map((item) => (
          <IconButton
            key={item.icon}
            disableRipple
            name={item.icon as keyof typeof Icons}
            size="small"
            sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            onClick={item.handler}
          />
        ))}
      </Stack>
    </Dialog>
  );
});
