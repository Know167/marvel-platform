import React, { useState } from 'react';

import {
  Button,
  CircularProgress,
  Fade,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

import styles from './styles';

const PresentationGenerator = () => {
  const [formData, setFormData] = useState({
    gradeLevel: '',
    numSlides: '',
    topic: '',
    standards: '',
    notes: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError('');
    if (!formData.gradeLevel || !formData.numSlides || !formData.topic) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('/api/submit-tool', {
        gradeLevel: formData.gradeLevel,
        numSlides: formData.numSlides,
        topic: formData.topic,
        standards: formData.standards,
        notes: formData.notes,
      });
      setSlides(response.data.slides || []);
    } catch (err) {
      setError('Failed to generate slides. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(slides, null, 2)], {
      type: 'text/plain',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'slides.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        <Typography variant="h4" {...styles.titleProps}>
          Presentation Generator
        </Typography>
        <Grid {...styles.formGridProps}>
          <TextField
            label="Grade Level"
            select
            name="gradeLevel"
            value={formData.gradeLevel}
            onChange={handleInputChange}
            {...styles.inputProps}
          >
            <MenuItem value="Elementary">Elementary</MenuItem>
            <MenuItem value="Middle School">Middle School</MenuItem>
            <MenuItem value="High School">High School</MenuItem>
          </TextField>
          <TextField
            label="Number of Slides"
            type="number"
            name="numSlides"
            value={formData.numSlides}
            onChange={handleInputChange}
            {...styles.inputProps}
          />
          <TextField
            label="Topic"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            {...styles.inputProps}
          />
          <TextField
            label="Standards/Objectives"
            name="standards"
            value={formData.standards}
            onChange={handleInputChange}
            {...styles.inputProps}
          />
          <TextField
            label="Additional Notes"
            name="notes"
            multiline
            rows={4}
            value={formData.notes}
            onChange={handleInputChange}
            {...styles.inputProps}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            {...styles.submitButtonProps}
          >
            Generate
          </Button>
        </Grid>

        {isLoading && <CircularProgress {...styles.loaderProps} />}
        {error && (
          <Typography color="error" {...styles.errorTextProps}>
            {error}
          </Typography>
        )}

        <Grid {...styles.previewGridProps}>
          {slides.map((slide, index) => (
            <Grid key={index} {...styles.slideProps}>
              <Typography {...styles.slideTitleProps}>{slide.title}</Typography>
              <Typography {...styles.slideContentProps}>
                {slide.content}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {slides.length > 0 && (
          <Button
            variant="outlined"
            onClick={handleExport}
            {...styles.exportButtonProps}
          >
            Export as Text
          </Button>
        )}
      </Grid>
    </Fade>
  );
};

export default PresentationGenerator;
