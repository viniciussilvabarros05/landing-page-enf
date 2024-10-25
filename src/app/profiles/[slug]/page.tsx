import { ModalProfile } from "@/components/modal-profile";
import { profiles } from "@/utils/profiles";

type Props = {
  params: { slug: string };
};

export default function Page({ params }: Props) {
  const { slug } = params;
  const profileSearch = decodeURIComponent(slug);
  const profileData = profiles.find(
    (profile) => profile.label == profileSearch
  );

  return (
    <div className="min-h-full">
      <ModalProfile profile={profileData} />
    </div>
  );
}
