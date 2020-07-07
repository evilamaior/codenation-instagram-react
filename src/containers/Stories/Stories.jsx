import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStories } from '../../actions/stories';

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ getUserHandler }) => {
  const stories = useSelector((store) => store.stories.stories);
  const dispatch = useDispatch();
  const minhaAction = bindActionCreators(getStories, dispatch);
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  useEffect(() => {
    dispatch(minhaAction);
  }, []);

  const findStoryById = (id) => stories.find((story) => story.id === id);

  const handleStory = (story) => {
    const foundStory = findStoryById(story.id);
    const profileData = getUserHandler(story.userId);

    setSelectedProfile(profileData);
    setSelectedHistory(foundStory);
    setShowStory(!showStory);
  };

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const profileData = getUserHandler(story.userId);

            return (
              <button
                key={story.id}
                onClick={() => handleStory(story)}
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
              >
                <div className="user__thumb__wrapper">
                  <img src={profileData.avatar} alt={profileData.name} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </>
  );
};

export default Stories;
