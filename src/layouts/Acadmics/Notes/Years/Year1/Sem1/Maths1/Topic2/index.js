import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import SubTopic1 from './SubTopic1';

function Topic2() {
  return (
    <div>
    <div>
    <h4>Sub Topic 1</h4>
    <ScrollMenu>

    <SubTopic1 />
    <SubTopic1 />
    <SubTopic1 />

  </ScrollMenu>
    </div>

    <div>
    <h4>Sub Topic 2</h4>
    <ScrollMenu>

    <SubTopic1 />
    <SubTopic1 />
    <SubTopic1 />

  </ScrollMenu>
    </div>

    <div>
    <h4>Sub Topic 3</h4>
    <ScrollMenu>

    <SubTopic1 />
    <SubTopic1 />
    <SubTopic1 />

  </ScrollMenu>
    </div>

    <div>
    <h4>Sub Topic 4</h4>
    <ScrollMenu>

    <SubTopic1 />
    <SubTopic1 />
    <SubTopic1 />

  </ScrollMenu>
    </div>

    <div>
    <h4>Sub Topic 5</h4>
    <ScrollMenu>

    <SubTopic1 />
    <SubTopic1 />
    <SubTopic1 />

  </ScrollMenu>
    </div>
    </div>
  )
}

export default Topic2;
