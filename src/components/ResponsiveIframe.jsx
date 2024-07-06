import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ResponsiveIframe = forwardRef(({ src, title }, ref) => {
  return (
    <div ref={ref} style={styles.iframeContainer}>
      <iframe 
        src={src} 
        title={title} 
        style={styles.iframe}
        allow="camera; microphone; autoplay; encrypted-media;" 
        allowFullScreen
      />
    </div>
  );
});

const styles = {
  iframeContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    height: '100vh',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

ResponsiveIframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ResponsiveIframe.defaultProps = {
  title: 'Typebot',
};

export default ResponsiveIframe;
