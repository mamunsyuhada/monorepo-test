import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

import { PageTitle } from "@/components/PageTitle";

const StyledList = styled(List)({
  paddingTop: 0,
  paddingBottom: 0,
  "& li": {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export const CyberMediaGuidelines = React.memo(function CyberMediaGuidelines() {
  return (
    <>
      <PageTitle title="PEDOMAN PEMBERITAAN MEDIA SIBER" />
      <Container
        maxWidth="desktop"
        sx={(theme) => ({
          bgcolor: theme.vars.palette.background.default,
          py: 4,
        })}
      >
        <Stack sx={{ gap: 3 }}>
          <Box>
            <Typography>
              Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan
              pers adalah hak asasi manusia yang dilindungi Pancasila,
              Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi
              Manusia PBB. Keberadaan media siber di Indonesia juga merupakan
              bagian dari kemerdekaan berpendapat, kemerdekaan berekspresi, dan
              kemerdekaan pers.
            </Typography>
            <Typography>
              Media siber memiliki karakter khusus sehingga memerlukan pedoman
              agar pengelolaannya dapat dilaksanakan secara profesional,
              memenuhi fungsi, hak, dan kewajibannya sesuai Undang-Undang Nomor
              40 Tahun 1999 tentang Pers dan Kode Etik Jurnalistik. Untuk itu
              Dewan Pers bersama organisasi pers, pengelola media siber, dan
              masyarakat menyusun Pedoman Pemberitaan Media Siber sebagai
              berikut:
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">1. Ruang Lingkup</Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="a. Media Siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers." />
              </ListItem>
              <ListItem>
                <ListItemText primary="b. Isi Buatan Pengguna (User Generated Content) adalah segala isi yang dibuat dan atau dipublikasikan oleh pengguna media siber, antara lain, artikel, gambar, komentar, suara, video dan berbagai bentuk unggahan yang melekat pada media siber, seperti blog, forum, komentar pembaca atau pemirsa, dan bentuk lain." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">
              2. Verifikasi dan keberimbangan berita
            </Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="a. Pada prinsipnya setiap berita harus melalui verifikasi." />
              </ListItem>
              <ListItem>
                <ListItemText primary="b. Berita yang dapat merugikan pihak lain memerlukan verifikasi pada berita yang sama untuk memenuhi prinsip akurasi dan keberimbangan." />
              </ListItem>
              <ListItem>
                <ListItemText primary="c. Ketentuan dalam butir (a) di atas dikecualikan, dengan syarat:" />
                <StyledList>
                  <ListItem>
                    <ListItemText primary="1) Berita benar-benar mengandung kepentingan publik yang bersifat mendesak;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="2) Sumber berita yang pertama adalah sumber yang jelas disebutkan identitasnya, kredibel dan kompeten;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="3) Subyek berita yang harus dikonfirmasi tidak diketahui keberadaannya dan atau tidak dapat diwawancarai;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="4) Media memberikan penjelasan kepada pembaca bahwa berita tersebut masih memerlukan verifikasi lebih lanjut yang diupayakan dalam waktu secepatnya. Penjelasan dimuat pada bagian akhir dari berita yang sama, di dalam kurung dan menggunakan huruf miring." />
                  </ListItem>
                </StyledList>
              </ListItem>
              <ListItem>
                <ListItemText primary="d. Setelah memuat berita sesuai dengan butir (c), media wajib meneruskan upaya verifikasi, dan setelah verifikasi didapatkan, hasil verifikasi dicantumkan pada berita pemutakhiran (update) dengan tautan pada berita yang belum terverifikasi." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">
              3. Isi Buatan Pengguna (User Generated Content)
            </Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="a. Media siber wajib mencantumkan syarat dan ketentuan mengenai Isi Buatan Pengguna yang tidak bertentangan dengan Undang-Undang No. 40 tahun 1999 tentang Pers dan Kode Etik Jurnalistik, yang ditempatkan secara terang dan jelas." />
              </ListItem>
              <ListItem>
                <ListItemText primary="b. Media siber mewajibkan setiap pengguna untuk melakukan registrasi keanggotaan dan melakukan proses log-in terlebih dahulu untuk dapat mempublikasikan semua bentuk Isi Buatan Pengguna. Ketentuan mengenai log-in akan diatur lebih lanjut." />
              </ListItem>
              <ListItem>
                <ListItemText primary="c. Dalam registrasi tersebut, media siber mewajibkan pengguna memberi persetujuan tertulis bahwa Isi Buatan Pengguna yang dipublikasikan:" />
                <StyledList>
                  <ListItem>
                    <ListItemText primary="1) Tidak memuat isi bohong, fitnah, sadis dan cabul;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="2) Tidak memuat isi yang mengandung prasangka dan kebencian terkait dengan suku, agama, ras, dan antargolongan (SARA), serta menganjurkan tindakan kekerasan;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="3) Tidak memuat isi diskriminatif atas dasar perbedaan jenis kelamin dan bahasa, serta tidak merendahkan martabat orang lemah, miskin, sakit, cacat jiwa, atau cacat jasmani." />
                  </ListItem>
                </StyledList>
              </ListItem>
              <ListItem>
                <ListItemText primary="d. Media siber memiliki kewenangan mutlak untuk mengedit atau menghapus Isi Buatan Pengguna yang bertentangan dengan butir (c)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="e. Media siber wajib menyediakan mekanisme pengaduan Isi Buatan Pengguna yang dinilai melanggar ketentuan pada butir (c). Mekanisme tersebut harus disediakan di tempat yang dengan mudah dapat diakses pengguna." />
              </ListItem>
              <ListItem>
                <ListItemText primary="f. Media siber wajib menyunting, menghapus, dan melakukan tindakan koreksi setiap Isi Buatan Pengguna yang dilaporkan dan melanggar ketentuan butir (c), sesegera mungkin secara proporsional selambat-lambatnya 2 x 24 jam setelah pengaduan diterima." />
              </ListItem>
              <ListItem>
                <ListItemText primary="g. Media siber yang telah memenuhi ketentuan pada butir (a), (b), (c), dan (f) tidak dibebani tanggung jawab atas masalah yang ditimbulkan akibat pemuatan isi yang melanggar ketentuan pada butir (c)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="h. Media siber bertanggung jawab atas Isi Buatan Pengguna yang dilaporkan bila tidak mengambil tindakan koreksi setelah batas waktu sebagaimana tersebut pada butir (f)." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">
              4. Ralat, Koreksi, dan Hak Jawab
            </Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="a. Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang ditetapkan Dewan Pers." />
              </ListItem>
              <ListItem>
                <ListItemText primary="b. Ralat, koreksi dan atau hak jawab wajib ditautkan pada berita yang diralat, dikoreksi atau yang diberi hak jawab." />
              </ListItem>
              <ListItem>
                <ListItemText primary="c. Di setiap berita ralat, koreksi, dan hak jawab wajib dicantumkan waktu pemuatan ralat, koreksi, dan atau hak jawab tersebut." />
              </ListItem>
              <ListItem>
                <ListItemText primary="d. Bila suatu berita media siber tertentu disebarluaskan media siber lain, maka:" />
                <StyledList>
                  <ListItem>
                    <ListItemText primary="1) Tanggung jawab media siber pembuat berita terbatas pada berita yang dipublikasikan di media siber tersebut atau media siber yang berada di bawah otoritas teknisnya;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="2) Koreksi berita yang dilakukan oleh sebuah media siber, juga harus dilakukan oleh media siber lain yang mengutip berita dari media siber yang dikoreksi itu;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="3) Media yang menyebarluaskan berita dari sebuah media siber dan tidak melakukan koreksi atas berita sesuai yang dilakukan oleh media siber pemilik dan atau pembuat berita tersebut, bertanggung jawab penuh atas semua akibat hukum dari berita yang tidak dikoreksinya itu." />
                  </ListItem>
                </StyledList>
              </ListItem>
              <ListItem>
                <ListItemText primary="e. Sesuai dengan Undang-Undang Pers, media siber yang tidak melayani hak jawab dapat dijatuhi sanksi hukum pidana denda paling banyak Rp500.000.000 (Lima ratus juta rupiah)." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">5. Pencabutan Berita</Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="a. Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran dari pihak luar redaksi, kecuali terkait masalah SARA, kesusilaan, masa depan anak, pengalaman traumatik korban atau berdasarkan pertimbangan khusus lain yang ditetapkan Dewan Pers." />
              </ListItem>
              <ListItem>
                <ListItemText primary="b. Media siber lain wajib mengikuti pencabutan kutipan berita dari media asal yang telah dicabut." />
              </ListItem>
              <ListItem>
                <ListItemText primary="c. Pencabutan berita wajib disertai dengan alasan pencabutan dan diumumkan kepada publik." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">6. Iklan</Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="a. Media siber wajib membedakan dengan tegas antara produk berita dan iklan." />
              </ListItem>
              <ListItem>
                <ListItemText primary="b. Setiap berita/artikel/isi yang merupakan iklan dan atau isi berbayar wajib mencantumkan keterangan ”advertorial”, ”iklan”, ”ads”, ”sponsored”, atau kata lain yang menjelaskan bahwa berita/artikel/isi tersebut adalah iklan." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">7. Hak Cipta</Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="Media siber wajib menghormati hak cipta sebagaimana diatur dalam peraturan perundang-undangan yang berlaku." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">8. Pencantuman Pedoman</Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="Media siber wajib mencantumkan Pedoman Pemberitaan Media Siber ini di medianya secara terang dan jelas." />
              </ListItem>
            </StyledList>
          </Box>

          <Box>
            <Typography variant="h6">9. Sengketa</Typography>
            <StyledList>
              <ListItem>
                <ListItemText primary="Penilaian akhir atas sengketa mengenai pelaksanaan Pedoman Pemberitaan Media Siber ini diselesaikan oleh Dewan Pers." />
              </ListItem>
            </StyledList>
          </Box>
        </Stack>

        <Stack sx={{ gap: 3, my: 6 }}>
          <Typography>Jakarta, 3 Februari 2012</Typography>

          <Box sx={{ pl: 3 }}>
            <Typography>Disepakati oleh:</Typography>
            <Typography sx={{ fontWeight: 600 }}>
              ORGANISASI WARTAWAN DAN ORGANISASI PERUSAHAAN PERS
            </Typography>
            <StyledList sx={{ "& li": { pl: 0 } }}>
              <ListItem>
                <ListItemText
                  primary="1. Aliansi Jurnalis Independen (AJI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Persatuan Wartawan Indonesia (PWI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Ikatan Jurnalis Televisi Indonesia (IJTI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="4. Asosiasi Televisi Lokal Indonesia (ATVLI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="5. Asosiasi Televisi Swasta Indonesia (ATVSI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="6. Serikat Perusahaan Pers (SPS)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="7. Persatuan Radio Siaran Swasta Nasional Indonesia (PRSSNI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="8. Jaringan Media Siber Indonesia (JMSI)"
                  primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                />
              </ListItem>
            </StyledList>
          </Box>
        </Stack>
      </Container>
    </>
  );
});
