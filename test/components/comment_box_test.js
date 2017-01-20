import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');

  });

  it('had a text area', () => {
    expect(component.find('textarea')).to.exist;

  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;

  });


  describe('Entering some text', () => {

    beforeEach( () => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text that has been entered', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
    
    it('when submitted clears input', () => {
      // console.log(component) // gives you <form> element
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });



});
