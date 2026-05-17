export type TeamMember = {
  id: string
  name: string
  role: string
  bio?: string
  photoUrl?: string
  email?: string
}

/**
 * Add team members here when photos and details are ready.
 *
 * @example
 * {
 *   id: 'jane-doe',
 *   name: 'Jane Doe',
 *   role: 'Executive Director',
 *   bio: 'Optional short bio.',
 *   photoUrl: 'https://example.com/photo.jpg',
 *   email: 'jane@example.org',
 * }
 */
export const teamMembers: TeamMember[] = []
