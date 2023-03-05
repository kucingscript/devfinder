const Center = ({ data: { bio, public_repos, followers, following } }) => (
  <>
    <p className="text-center sm:text-base text-sm sm:pb-6 pb-0">{bio}</p>
    <div className="grid grid-cols-3 text-center py-8">
      <div>
        <h1 className="repo">Repos</h1>
        <span>{public_repos}</span>
      </div>
      <div>
        <h1 className="repo">Followers</h1>
        <span>{followers}</span>
      </div>
      <div>
        <h1 className="repo">Following</h1>
        <span>{following}</span>
      </div>
    </div>
  </>
);

export default Center;
