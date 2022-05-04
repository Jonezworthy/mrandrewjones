enum skills {
    'guru',
    'advanced',
    'intermediate',
    'beginner',
    'exposure',
}
export type skill = keyof typeof skills;