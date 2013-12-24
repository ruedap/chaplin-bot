require 'spec_helper'

describe Tweet do
  describe '.reset' do
    before { described_class.reset(Remark.all) }

    it 'returns 31' do
      expect(described_class.all.count).to eq(31)
      described_class.reset(Remark.all)
      expect(described_class.all.count).to eq(31)
    end
  end

  describe '.empty?' do
    context 'with before reset' do
      it 'returns true' do
        expect(described_class.empty?).to be_true
      end
    end

    context 'with after reset' do
      before { described_class.reset(Remark.all) }

      it 'returns false' do
        expect(described_class.empty?).to be_false
      end
    end
  end

  describe '.latest' do
    before { described_class.reset(Remark.all) }

    it 'returns latest remark' do
      expect(described_class.latest.id).to eq(1)
      Tweet.first.used
      expect(described_class.latest.id).to eq(2)
    end
  end
end
