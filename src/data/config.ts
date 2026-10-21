export type Story = { id: string; title: string; label: string; images: string[] };

const gallery = (post: string, count: number) => Array.from(
  { length: count },
  (_, index) => `/assets/lookbook/${post}/instabulkdownloader.com_${post}_${String(index + 1).padStart(2, '0')}.jpg`,
);

export const CONFIG = {
  handle: '@widelife_wl',
  instagramUrl: 'https://www.instagram.com/widelife_wl/',
  ownerHandle: '@mides_life',
  ownerUrl: 'https://www.instagram.com/mides_life/',
  whatsappUrl: 'https://wa.me/2349018060804',
  mark: '/assets/wide-life-mark.jpg',
  founderImage: '/assets/mides-founder.jpg',
  founderDetailImage: '/assets/mides-detail.jpg',
  heroImage: '/assets/lookbook/DUufHxTCiDG/instabulkdownloader.com_DUufHxTCiDG_01.jpg',
  heroFilm: '/assets/films/instabulkdownloader.com_DXCofUqKy0e.mp4',
  stories: [
    { id: 'rose', label: '01 / Occasion', title: 'Crimson tailoring', images: gallery('DUufHxTCiDG', 6) },
    { id: 'blue', label: '02 / Tailoring', title: 'Midnight blue', images: gallery('DTiKUgginHQ', 4) },
    { id: 'denim', label: '03 / Studio', title: 'Framed denim', images: gallery('DX4sjiJCr-P', 4) },
    { id: 'pinstripe', label: '04 / Form', title: 'Pinstripe study', images: gallery('DXFFI-PCp12', 4) },
    { id: 'essentials', label: '05 / Ready to wear', title: 'WIDE LIFE essentials', images: [...gallery('DX4NaYIik9g', 3), ...gallery('DY-AIwqCujZ', 1)] },
    { id: 'white', label: '06 / Occasion', title: 'White sculpted', images: gallery('DXCSsZ1CjTP', 6) },
  ] as Story[],
  films: [
    '/assets/films/instabulkdownloader.com_DXCofUqKy0e.mp4',
    '/assets/films/instabulkdownloader.com_DTgBAHQivRB.mp4',
  ],
};
