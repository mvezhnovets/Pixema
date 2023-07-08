export const ButtonAppearance = {
  Primary: 'primary',
  Secondary: 'secondary',
  IconButton: 'iconButton'
};

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];
