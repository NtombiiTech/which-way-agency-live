export default function Loading() {
  return (
    <div className="shell loading-page" role="status" aria-label="Loading page">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-copy" />
      <div className="skeleton skeleton-media" />
    </div>
  );
}
