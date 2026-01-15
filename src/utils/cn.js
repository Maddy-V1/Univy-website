/**
 * Utility function for merging class names
 * Simple implementation for className concatenation
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}